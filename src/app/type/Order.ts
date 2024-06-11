export interface Order  {
    _id: string;
    user_id: string;
    total_amount    : number;
    order_date: string
    address: string
    type_payment: string
    order_status: number
}

export interface orderItem {
    _id: string
    order_id: string
    product_id: string
    quantity: number
    unit_price: number
    total_price: number
}