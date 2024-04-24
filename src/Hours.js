function Hours({ flipped, onChange, distance }) {
  return (
    <div>
      <label htmlFor="miles">Miles</label>
      <input
        value={flipped ? distance : Math.round(distance / 0.621371)}
        id="miles"
        placeholder="Miles"
        type="number"
        onChange={onChange}
        disabled={flipped === false}
      />
    </div>
  );
}

export default Hours;
