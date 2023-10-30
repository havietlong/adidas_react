<?php

namespace App\Http\Controllers;

use App\Models\Orders_detail;
use App\Models\Orders;
use Illuminate\Http\Request;

class OrdersDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function addOrderDetails(Request $request)
{
    $latestOrder = Orders::latest('created_at_orders')->first();

    // Assuming you've sent the array of items as part of the request.
    $cart = $request->all(); // Assuming the array is named 'cart' in the request.

    foreach ($cart as $item) {
        // Create a new record in the database table for each item in the cart.
        $orderDetail = new Orders_detail();
        $orderDetail->id_order = $latestOrder->id_orders;
        $orderDetail->id_product = $item['id_products'];
        $orderDetail->quantity = $item['quantity'];
        // ... assign other properties

        // Save the order detail to the database.
        $orderDetail->save();
    }
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
    public function show(Orders_detail $orders_detail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Orders_detail $orders_detail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Orders_detail $orders_detail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Orders_detail $orders_detail)
    {
        //
    }
}
