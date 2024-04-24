function Minutes({ flipped, onChange, distance }) {
  return (
    <div>
      <label htmlFor="kilometers">Kilometers</label>
      <input
        value={flipped ? distance * 0.621371 : distance}
        id="kilometers"
        placeholder="Kilometers"
        type="number"
        onChange={onChange}
        disabled={flipped === true}
      />
    </div>
  );
}

export default Minutes;
