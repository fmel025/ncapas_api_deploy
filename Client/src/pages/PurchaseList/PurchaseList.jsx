
import Layout from "../../components/Layout/Layout"
import OrderCard from "../../components/OrderCard/OrderCard"


function PurchaseList() {
 
    return (
        <Layout>
          <h1 className="text-5xl font-bold text-main mt-5 mb-2">Mis ordenes</h1>
          <div className="flex flex-col gap-4 mb-5 w-full items-center">
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
          
        </Layout>
    )
  }
  
  export default PurchaseList
  