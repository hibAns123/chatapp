function NewUser({ newUser, handleChange, logNewUser }) {
  return (
    <div>
      <h1 className="text-center" style={{margin:'200px 100px 100px 100px'}}>Lets<span style={{fontWeight:'bolder', color:'orange'}}>Chat</span></h1>
      <div className="card w-100 text-center border-white">
        <div className="row">
          <div className="col-12">
            <h5>Welcom to LetsChat!!</h5>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center py-1">
            <input
              type="text"
              name="username"
              value={newUser}
              className="form-control mb-3 w-80"
              placeholder="username"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => (e.code === "Enter" ? logNewUser() : null)}
            />
            <button
              className="btn w-50" style={{backgroundColor:'orange'}}
              onClick={() => {
                logNewUser();
                handleChange({ currentTarget: { value: "" } }); // Clear input
              }}
            >
              Join!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser