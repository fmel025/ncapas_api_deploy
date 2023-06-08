import ScanButton from "../Buttons/ScanButton";
import TransferButton from "../Buttons/TransferButton"

{/* <div className='flex bg-white cursor-pointer h-52 gap-10 w-full rounded-lg shadow-lg p-2'>
            <figure className="ml-2 w-6/12 flex items-center">
                <img className="object-scale-down h-48 w-96" src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            </figure>
            <div className="p-3 w-5/12">
                <h1 className='mt-1 text-xl font-bold'>Titulo del evento</h1>
                <p className='mt-2 text-lg font-medium text-gray-400'>Fecha: 23 de mayo</p>
                <p className='mt-1 text-lg font-medium text-gray-400'>Localidad: VIP</p>
                <div className="flex ">
                <ScanButton/>
                <TransferButton/>
            </div>
            </div>
            
      </div> */}

const ActiveTicket = () => {
    return (
        <div className="mx-10 card md:card-side bg-base-100 shadow-xl">
            <figure>
                <img className="h-48 md:h-64" src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h1 className="card-title">Titulo del evento</h1>
                <p className='mt-2 text-lg font-medium text-gray-400'>Fecha: 23 de mayo</p>
                <p className='mt-1 text-lg font-medium text-gray-400'>Localidad: VIP</p>
                <div className="card-actions justify-end">
                    <div className="join join-horizontal">
                        <ScanButton/>
                        <TransferButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveTicket