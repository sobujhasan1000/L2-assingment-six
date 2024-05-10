// eslint-disable-next-line react-refresh/only-export-components
export const carddonation = [
  {
    name: "shoes",
    details: "shoes details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "shirt",
    details: "shirt details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "hat",
    details: "hat details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "hat",
    details: "hat details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "hat",
    details: "hat details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "hat",
    details: "hat details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
];

const DonationCard = () => {
  return (
    <div className="my-4 grid grid-cols-3 gap-10 mx-16">
      {carddonation.map((item) => (
        <div
          key={item.name}
          className="card card-compact bg-base-100 shadow-xl rounded-md"
        >
          <figure>
            <img className="rounded-md" src={item.img} alt={item.name} />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">{item.name}</h2>
            <p className="text-sm">{item.details}</p>
            <div className="card-actions justify-end">
              <button className="btn bg-green-400 p-2 rounded-md text-xl">
                View details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonationCard;
