"use client"
import {useAppSelector} from "@/store/hooks";
import {useDispatch} from "react-redux";
import {Button} from "@/components/ui/button";
import {decrement, increment} from "@/features/number/store/numberSlice";

export default function NumberPage() {
  const {value} = useAppSelector(state => state.number)
  const dispatch = useDispatch()

  return (
    <div className={"flex flex-col gap-4 items-center justify-center h-screen"}>
      <h1>Number: {value}</h1>
      <Button onClick={() => dispatch(increment())}>Tang</Button>
      <Button onClick={() => dispatch(decrement())}>Giam</Button>
    </div>
  )
}
