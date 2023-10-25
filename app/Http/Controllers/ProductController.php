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
    public function indexByID(string $id)
    {
        $data = products::where('id_products', $id)->get(); // Replace 'YourModel' with your actual model.
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
        $newProduct = new products;
        $newProduct->name_products = $request->input("name");
        $newProduct->price_products = intval($request->input("price"));
        $newProduct->description_products =  $request->input("description");
        $newProduct->id_type = intval($request->input("type"));
        $newProduct->id_category =  intval($request->input("category"));
        $newProduct->save();

        return $newProduct;
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
        // Find the product by ID
        $existingProduct = products::where('id_products',$id)->first();

        // Check if the product exists
        if ($existingProduct) {
            // Update the product's attributes
            $existingProduct->name_products = $request->input("name");
            $existingProduct->price_products = intval($request->input("price"));
            $existingProduct->description_products = $request->input("description");
            $existingProduct->id_category = intval($request->input("category"));
            $existingProduct->id_type = intval($request->input("type"));

            // Save the changes to the database
            $existingProduct->save();

            return $existingProduct; // Return the updated product
        } else {
            return response()->json(['message' => "Product not found"], 404);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $existingProduct = products::where('id_products',$id)->first();
        switch ($existingProduct) {
            case true:
                $existingProduct->delete();
                return "Đã xóa sản phẩm";
            default:
                return "Không tìm thấy sản phẩm";
        }
    }
}
