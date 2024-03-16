<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class LoginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function register(Request $request)
    {
        $data = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'level' => 'pelanggan',
            'api_token' => '12345678',
            'status' => 1,
            'relasi' => $request->input('email'),
        ];

        User::create($data);
        return response()->json($data);
    }
    public function login(Request $request){
        $email = $request->input('email');
        $password = $request->input('password');
        $user = User::where('email', $email)->first();

        if ($user) {
            if ($user->password == $password) {
                $token = Str::random(40);
                $user->update([
                    'api_token' => $token,
                ]);

                return response()->json([
                    'pesan' => 'Login Berhasil',
                    'token' => $token,
                    'data' => $user,
                ], 200);
            } else{
                return response()->json([
                    'pesan' => 'Password salah',
                    'data' => ''
                ], 401);
            }
        }else{
            return response()->json('Email tidak terdaftar', 401);
        }
    }
    
    //
}
