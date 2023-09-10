export default function About(props) {
  return (
    <div className="container">
      <h1
        className="my-2"
        style={{ color: props.mode === "light" ? "#2d2c2c" : "White" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#2d2c2c" : "white",
            color: props.mode === "dark" ? "white" : "#2d2c2c",
          }}
        >
          <h2
            className="accordion-header"
            style={{ color: props.mode === "light" ? "#2d2c2c" : "White" }}
          >
            <button
              className="accordion-button"
              style={{
                backgroundColor: props.mode === "dark" ? "#2d2c2c" : "white",
                color: props.mode === "dark" ? "white" : "#2d2c2c",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>हमारी वेबसाइट</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#2d2c2c" : "white",
                color: props.mode === "dark" ? "white" : "#2d2c2c",
              }}
            >
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2
            className="accordion-header"
            style={{
              backgroundColor: props.mode === "dark" ? "#2d2c2c" : "white",
              color: props.mode === "dark" ? "white" : "#2d2c2c",
            }}
          >
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "dark" ? "#2d2c2c" : "white",
                color: props.mode === "dark" ? "white" : "#2d2c2c",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>हमारा विशेष कार्य</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#2d2c2c" : "white",
                color: props.mode === "dark" ? "white" : "#2d2c2c",
              }}
            >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2
            className="accordion-header"
            style={{
              backgroundColor: props.mode === "dark" ? "#2d2c2c" : "white",
              color: props.mode === "dark" ? "white" : "#2d2c2c",
            }}
          >
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.mode === "dark" ? "#2d2c2c" : "white",
                color: props.mode === "dark" ? "white" : "#2d2c2c",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>हमारा नज़रिया</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#2d2c2c" : "white",
                color: props.mode === "dark" ? "white" : "#2d2c2c",
              }}
            >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
