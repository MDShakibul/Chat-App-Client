/* eslint-disable react/no-unknown-property */
import Avater from '../../assets/avater.png';
import Input from '../../components/Input';

function Dashboard() {
	const contacts = [
		{
			name: 'Jone',
			status: 'Available',
			img: Avater,
		},
		{
			name: 'Alexander',
			status: 'Available',
			img: Avater,
		},
		{
			name: 'Alex',
			status: 'Available',
			img: Avater,
		},
		{
			name: 'Adam',
			status: 'Available',
			img: Avater,
		},
		{
			name: 'Mary',
			status: 'Available',
			img: Avater,
		},
		{
			name: 'Musha',
			status: 'Available',
			img: Avater,
		},

		{
			name: 'Larry',
			status: 'Available',
			img: Avater,
		},
	];
	return (
		<div className="w-screen flex">
      <div className="w-[25%] h-screen border bg-secondary flex flex-col">
  <div className="flex items-center my-8 mx-14">
    <div className="border border-primary p-[2px] rounded-full">
      <img src={Avater} width={75} height={75} alt="Account Avatar" />
    </div>
    <div className="ml-8">
      <h3 className="text-2xl">Account Name</h3>
      <p className="text-lg font-light">My Account</p>
    </div>
  </div>
  <hr />
  <div className="mx-14 mt-10 flex-1 overflow-auto">
    <div className="text-primary text-lg">Messages</div>
    {contacts?.map((contact, index) => {
      const { name, status, img } = contact;
      return (
        <div
          key={index}
          className="flex items-center py-8 border-b border-b-gray-300"
        >
          <div className="cursor-pointer flex items-center">
            <div>
              <img src={img} width={60} height={60} alt={name} />
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm font-light text-gray-400">{status}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

			<div className="w-[50%] h-screen bg-white flex flex-col items-center">
				<div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14">
					<div className='cursor-pointer'>
						<img src={Avater} width={60} height={60} alt={name} />
					</div>
					<div className="ml-6 mr-auto">
						<h3 className="text-lg">Alexander</h3>
						<p className="text-sm font-light text-gray-400">Online</p>
					</div>
					<div className='cursor-pointer'>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x-bind:width="size"
							x-bind:height="size"
							viewBox="0 0 24 24"
							fill="none"
							stroke="black"
							x-bind:stroke-width="stroke"
							stroke-linecap="round"
							stroke-linejoin="round"
							width="24"
							height="24"
							stroke-width="2"
						>
							<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2"></path>
							<path d="M15 5h6"></path>
							<path d="M18.5 7.5l2.5 -2.5l-2.5 -2.5"></path>
						</svg>
					</div>
				</div>
        <div className='h-[75%] w-full overflow-auto shadow-sm '>
          <div className='p-14'>
            <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className='p-14 w-full flex items-center'>
          <Input placeholder='Type a message...' className='w-[75%]' inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none '/>
          <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
</svg>
          </div>
          <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
  <path d="M9 12h6"></path>
  <path d="M12 9v6"></path>
</svg>
          </div>
        </div>
			</div>
			<div className="w-[25%] h-screen bg-light"></div>
		</div>
	);
}

export default Dashboard;
