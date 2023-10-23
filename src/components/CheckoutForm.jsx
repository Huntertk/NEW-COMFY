import { useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { useState } from "react"
import { toast } from "react-toastify"


const CheckoutForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit  = () => {
        if(!name || !address){
            toast.error("Please Enter All Value")
            return
        }
        dispatch(clearCart())
        toast.success("Order Placed")
        toast.success("Thank you shopping with us")
    }
  return (
    <form className='flex flex-col items-start gap-4' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-bold'>Order Confirmation</h1>
        <input 
        type="text" 
        placeholder="Enter Full Name" className="input input-bordered w-full max-w-xs" 
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="Enter Address" className="input input-bordered w-full max-w-xs" 
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        />
        <button className='btn btn-primary'>Confirm Order</button>
    </form>
  )
}

export default CheckoutForm