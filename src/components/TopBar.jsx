function TopBar({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center mb-6">

      <div>
        <h1 className="text-5xl font-bold">
          Profile Dashboard
        </h1>

        <p className="text-gray-600">
           Welcome back, {user.name} 👋
      </p>
      </div>

    </div>
  );
}

export default TopBar;