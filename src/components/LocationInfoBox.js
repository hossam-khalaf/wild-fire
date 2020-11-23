const LocationInfoBox = ({ info }) => {
  return (
    <div className='location-info'>
      <h2>Event Loction Info</h2>

      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
