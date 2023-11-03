<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use App\Models\Orders_detail;
use Illuminate\Http\Request;


class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Orders::all();

        return $orders;
    }

    public function indexAdmin()
    {
        $orders = orders::orderBy('id_orders', 'DESC')
                ->join('users', 'orders.id_user', '=', 'users.id_users')
                ->select('orders.*', 'orders.id_user', 'users.name_users', 'orders.price_orders')
                ->get();
            return response()->json($orders);
    }

    /**
     * Display a listing of the resource.
     */
    public function cancelOrder(String $id)
    {
        $order = Orders::where('id_orders', $id)->first();
        
        if ($order) {
            $status = $order->status_orders;
            if($status == 1){
                //Xoa Order_Detail
                
                $order->status_orders = 3;
                $order->save();
                return "cancel successfully";
            }else{
                return response()->json(['status' => 'Order already processed']); 
            }
        }
    
        // Handle the case where the order with the specified ID was not found.
        return response()->json(['status' => 'Order not found'], 404);

    }

    public function ApproveOrder(String $id)
    {
        $order = Orders::where('id_orders', $id)->first();
        
        if ($order) {
            $status = $order->status_orders;
            if($status == 1){
                //Xoa Order_Detail
                
                $order->status_orders = 2;
                $order->save();
                return "Approve successfully";
            }else{
                return response()->json(['status' => 'Order already processed']); 
            }
        }
    
        // Handle the case where the order with the specified ID was not found.
        return response()->json(['status' => 'Order not found'], 404);

    }

    

    /**
     * Display a listing of the resource.
     */
    public function addOrder(Request $request)
    {
        $f_name = $request->input("first_name");
        $l_name = $request->input("last_name");
        $receiver = $f_name . $l_name;

        $newOrder = new Orders;
        $newOrder->price_orders = $request->input("price");
        $newOrder->status_orders = 1;
        $newOrder->id_user = intval($request->input("id_user"));
        $newOrder->receiver_orders = $receiver;
        $newOrder->address_orders = $request->input("address");
        $newOrder->phoneNumber_orders =  intval($request->input("phoneNumber"));
        $newOrder->save();

        return $newOrder;
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
    public function show(Orders $orders)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Orders $orders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Orders $orders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Orders $orders)
    {
        //
    }
}
