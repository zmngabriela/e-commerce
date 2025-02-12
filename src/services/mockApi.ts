export const fakeApiCreateOrder = (order: Order): Promise<OrderAnswer> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockResponse: OrderAnswer = {
        ...order,
        id: Math.floor(Math.random() * 1000000),
        // simulate the status 80% of orders as paid, the rest pending
        status: Math.random() > 0.2 ? "paid" : "pending",
        createdAt: new Date().toISOString,
        totalAmount: order.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        trackingCode: `TR${Math.floor(Math.random() * 999999)}`,
      }
      resolve(mockResponse)
    }, 1000)
  })
}
