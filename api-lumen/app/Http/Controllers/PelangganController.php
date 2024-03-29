<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use Illuminate\Http\Request;

class PelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Pelanggan::all();

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {  
         
        // $this->validate($request, [
        //     'pelanggan' => 'required|unique:pelanggans',
        //     'alamat' => 'required',
        //     'telp' => 'required|numeric|unique:pelanggans',
        // ]);

        $pelanggan = Pelanggan::create($request->all());

        if ($pelanggan) {
            return response()->json([
                'pesan' => 'Data pelanggan berhasil ditambahkan',
                'data' => $pelanggan,
            ], 201);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Pelanggan::where('idpelanggan', $id)->get();

        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function edit(Pelanggan $pelanggan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $update = Pelanggan::where('idpelanggan', $id)->update($request->all());
        if ($update) {
            return response()->json([
                'pesan' => "Mengupdate pelanggan dengan id $id",
                'data' => $update
            ], 201);  
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pelanggan = Pelanggan::where('idpelanggan', $id)->delete();

        if ($pelanggan) {
            return response()->json([
                'pesan' => "Data pelanggan dengan id $id berhasil dihapus",
                'data' => $pelanggan
            ], 200);
        }
    }
}
