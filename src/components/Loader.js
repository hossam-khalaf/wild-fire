import spinner from './spinner.gif';

export const Loader = () => {
  return (
    <div>
      <div className='loader'>
        <img src={spinner} alt='Loading...' />
        <h1>Fetching Data</h1>
      </div>
    </div>
  );
};

export default Loader;
