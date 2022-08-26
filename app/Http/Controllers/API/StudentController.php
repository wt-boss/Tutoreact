<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students =Student::all();

       return response()->json([
           'status'=>200 ,
            'students'=>$students]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    $validator =Validator::make($request->all(),[
        'name'=>'string|min:3|max:30',
        'course'=>'string|min:3',
        'phone'=>'required|min:8|max:8',
        'email'=>'email|required',
    ]);

    if($validator->fails()){
        return response()->json(['errors'=>$validator->errors()]);
    }

    Student::create($request->all());

    return response()->json([
        'status'=>200,
        'message'=>'studend added successefuly'
    ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $student = Student::find($id);
        return response()->json(['status'=>200 , 'student'=>$student]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator =Validator::make($request->all(),[
            'name'=>'string|min:3|max:30',
            'course'=>'string|min:3',
            'phone'=>'required|min:8|max:8',
            'email'=>'email|required',
        ]);
    
        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }


        $student = Student::find($id);
        $student->update($request->all());

        return response()->json([
            'status'=>200,
            'student'=>$student
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Student::find($id)->delete();
        return response()->json(['status'=>200 , 'message'=>'items deleted successfuly']);
    }
}
