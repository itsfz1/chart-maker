import Linechart from "../components/Linechart"
import { useRef, useState } from "react"

const CHARTS = {
  line: ({ data, categories, title, theme }) => (
    <Linechart title={title} data={data} categories={categories} theme={theme} />
  ),
  //More charts can be added here
}

const Home = () => {
  //Don't want to rerender the chart/page every time the state of input field changes
  const title = useRef(null)
  const data = useRef(null)
  const categories = useRef(null)
  const theme = useRef(null)
  const [inputs, setInputs] = useState({ title: undefined, data: undefined, categories: undefined, theme: undefined })

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputs({
      title: title.current.value.trim(),
      data: data.current.value.trim().split(" "),
      categories: categories.current.value.trim().split(" "),
      theme: theme.current.value,
    })
    window.scrollTo(0, 0)
  }

  return (
    <div>
      {CHARTS["line"](inputs)}
      {/*Will make seperate component for form which will render the form based on the selected chart for now keeping it simple*/}
      <form onSubmit={handleSubmit}>
        <div className="form row gap">
          <div className="user-input col-md-6">
            <input type="text" className="type-text" placeholder="Type a title" required ref={title} />
            <span class="focus-border">
              <i></i>
            </span>
          </div>
          <div className="user-input col-md-6">
            <input type="text" className="type-text" placeholder="Type a data seperated by space" required ref={data} />
            <span class="focus-border">
              <i></i>
            </span>
          </div>
          <div className="user-input col-md-6">
            <input
              type="text"
              className="type-text"
              placeholder="Type a categories seperated by space fixed 9 words "
              required
              ref={categories}
            />
            <span class="focus-border">
              <i></i>
            </span>
          </div>
          <div className="col-md-6">
            <div>
              <select name="theme" id="theme" ref={theme}>
                <option>Choose Theme</option>
                <option value="palette1">palette1</option>
                <option value="palette2">palette2</option>
                <option value="palette3">palette3</option>
                <option value="palette4">palette4</option>
                <option value="palette5">palette5</option>
                <option value="palette6">palette6</option>
                <option value="palette7">palette7</option>
                <option value="palette8">palette8</option>
                <option value="palette9">palette9</option>
                <option value="palette10">palette10</option>
              </select>
              <button type="submit" className="data-submit">
                Apply Changes
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <p className="info">
              After submission click on top right burger icon to download chart in{" "}
              <span className="underline">required format</span>.
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Home
