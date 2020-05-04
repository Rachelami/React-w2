import React from "react";
import axios from "axios";
import { getData, DeleteID, postNewId } from "../lib/Api";

class AddToList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// data: [],
            formAvatar: '',
            text: ''
		};
	}

	async handleOnSubmit(event) {
		event.preventDefault();
		const {formAvatar } = this.state;
		const response = await axios.post(
			`https://5dd14f8d15bbc2001448d07d.mockapi.io/products/`,
			{
				name: this.state.text,
				avatar: formAvatar,
			}
        );
        this.props.handelAddToList(this.state.text)
		console.log(response.data);
	}

	render() {
		const { formAvatar, data, loading } = this.state;

		return (
			<>
				<form
					onSubmit={(event) => {
						this.handleOnSubmit(event);
					}}
				>
					<input
						type="text"
						name="name"
						value={this.state.text}
						id="name"
						placeholder="name"
						onChange={(event) =>
							this.setState({ text: event.target.value })
						}
					/>
					<input
						type="text"
						name="avatar"
						value={formAvatar}
						id="avatar"
						placeholder="avatar"
						onChange={(event) =>
							this.setState({ formAvatar: event.target.value })
						}
					/>
					<button type="submit">New user</button>
				</form>
			</>
		);
	}
}
export default AddToList;
