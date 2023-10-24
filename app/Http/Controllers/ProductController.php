<?php

namespace App\Http\Controllers;

use App\Models\products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = products::all(); // Replace 'YourModel' with your actual model.
        return response()->json($data);
    }

    /**
     * Display a listing of the resource.
     */
    public function indexCategory($category)
    {
        switch ($category) {
            case 'men':
                $category = 1;
                break;
            case 'woman':
                $category = 2;
                break;
            case 'kids':
                $category = 3;
                break;
            case 'sports':
                $category = 4;
                break;
            case 'sale':
                $category = 5;
                break;
        }

        $data = products::where('id_category', $category)->get();
        return response()->json($data);
    }

    public function indexType($category, $type)
    {
        switch ($category) {
            case 'men':
                $category = 1;
                break;
            case 'woman':
                $category = 2;
                break;
            case 'kids':
                $category = 3;
                break;
            case 'sports':
                $category = 4;
                break;
            case 'sale':
                $category = 5;
                break;
        }

        switch ($type) {
            case 'sneakers':
                $type = 1;
                break;
            case 'running':
                $type = 2;
                break;
            case 'soccers':
                $type = 3;
                break;
            case 'basketball':
                $type = 4;
                break;
            case 'lifestyle':
                $type = 5;
                break;
        }

        $data = products::where('id_category', $category)
            ->where('id_type', $type)
            ->get();
        return response()->json($data);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
