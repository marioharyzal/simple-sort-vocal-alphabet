import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            input: "",
        };
    }

    handleDataChange(event) {
        const inputValue = event.target.value;
        const dataArray = inputValue.split("");

        let vocalData = [];
        dataArray.forEach((element) => {
            vocalData.push(element);
        });

        const input = vocalData.join("");

        let vocalDatas = [];
        vocalData.forEach((element) => {
            if (
                element == "a" ||
                element == "u" ||
                element == "i" ||
                element == "o" ||
                element == "e"
            ) {
                vocalDatas.push(element);
            }
        });

        vocalDatas.sort();
        const text = vocalDatas.join("");

        this.setState({
            data: text,
            input: input,
        });

        console.log(input);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(event) => {
                                        this.handleDataChange(event);
                                    }}
                                    value={this.state.input}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-3">
                    <p>{this.state.data}</p>
                </div>
            </div>
        );
    }
}

export default Form;
