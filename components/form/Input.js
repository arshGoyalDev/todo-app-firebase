const Input = ({value, setValue, error, type}) => {
  return (
    <div className='w-full'>
      <input
        type="text"
        name={type}
        id={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={type[0].toUpperCase() + type.slice(1)}
        className={` w-full py-3 px-5 bg-gray-50 dark:bg-zinc-900 border-2 rounded-lg ${error ? "border-red-700 placeholder:text-red-600" : "border-gray-200 w-full dark:border-zinc-800 placeholder:dark:text-zinc-600"}`}
      />
      {error && (
        <p className="text-red-700 text-sm mt-3">{error}</p>
      )}

    </div>
  );
};
export default Input;
