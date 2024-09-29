export default function SkeletonTrack() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="w-full bg-white/50 rounded-lg my-1 flex items-center p-3 animate-pulse">
          {/* NUMBER */}
          <div className="flex ml-4">
            <div className="bg-gray-600 rounded-full h-8 w-8"></div>
          </div>
          {/* CONTENT */}
          <div className="flex w-full my-5 items-center justify-between">
            <table className="w-full">
              <tbody className="flex w-full justify-between">
                <tr className="ml-5">
                  <td className="bg-gray-600 text-white text-3xl rounded h-6 w-2/3">
                    <span className="w-24  flex h-4"></span>
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-600 text-white h-4 w-1/4 rounded">
                    <span className="w-24  flex h-7"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}
