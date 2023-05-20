export default function ScannersTable() {
    return (
        <div className="overflow-x-auto w-3/5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr >
              <th className="bg-main"></th>
              <th className="bg-main text-white">Name</th>
              <th className="bg-main text-white">Email</th>
              <th className="bg-main text-white" ></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <label className="swap">
                <input type="checkbox" />
                <div className="bg-green-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-on">Añadir</div>
                <div className="bg-red-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-off">Eliminar</div>
                </label>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>
              <label className="swap">
                <input type="checkbox" />
                <div className="bg-green-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-on">Añadir</div>
                <div className="bg-red-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-off">Eliminar</div>
                </label>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>
              <label className="swap">
                <input type="checkbox" />
                <div className="bg-green-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-on">Añadir</div>
                <div className="bg-red-400 flex justify-center rounded-xl font-bold px-10 py-1 swap-off">Eliminar</div>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        );
  }
  