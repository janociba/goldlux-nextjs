'use client'

import React, { FunctionComponent } from "react";
import Link from "next/link";

type OrderCardProps = {
  id: string,
  date: string,
  status: string,
  startTime: string
}

const OrderCard: FunctionComponent<OrderCardProps> = ({
  id, date, startTime, status
}) => {

  return (
    <Link href={`/order/${id}`}>
      <div className="text-left w-[93vw] border border-black/50 rounded-xl py-2 px-5 my-5 bg-white shadow hover:bg-gray-100 duration-150">
        <h3 className="text-xl font-bold">
          Objednávka: {' '}
          <span className="font-normal italic text-black/50 text-sm">{id}</span>
        </h3>
        <p className="text-md font-bold mt-4 relative flex items-center">
          Odhadovaný čas:
          <span className="absolute left-40  border border-gray-400 px-2 py-0.5 rounded-lg">{startTime}</span>
        </p>
        <p className="text-md font-bold mt-3 relative flex items-center">
          Dátum upratovania:
          <span className="absolute left-40 border border-gray-400 px-2 py-0.5 rounded-lg">{date}</span>
        </p>
        <p className="text-md font-bold mt-3 mb-1 relative flex items-center">
          Stav:
          <span className="absolute left-40 border border-gray-400 px-2 py-0.5 rounded-lg">{status}</span>
        </p>

      </div>
    </Link>
  )
}

export default OrderCard;