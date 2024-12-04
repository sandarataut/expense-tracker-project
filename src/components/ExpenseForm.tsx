import categories from "../categories";

const ExpenseForm = () => {
  return (
    <form>
      {/* .mb3>label.form-label+input.form-control */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      {/* .mb-3>label.form-label+input[type=number].form-control */}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      {/* .mb-3>label.form-label+select.form-select */}
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          {categories.map((category) => (
            <option key={category}>category</option>
          ))}
        </select>
      </div>
      {/* button.btn.btn-primary */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
