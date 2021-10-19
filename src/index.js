import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from 'react-bootstrap/Table';

import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

class Budget extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<TransactionsTable />
					</Col>
					<Col>
						<TransactionForm />
					</Col>
				</Row>
			</Container>
		)
	}
}

class Transaction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: 0,
			summary: '',
		};
	}

	render() {
		return (
			<tr>
				<td>this.state.amount</td>
				<td>this.state.summary</td>
			</tr>
		)
	};
}

class TransactionsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transactions: [],
			overallSum: 0,
		};
	}

	render() {
		const transactions = this.state.transactions

		return (
			<div>
				<h1> Budget summary </h1>

				<Table striped bordered hover>
					<thead>
						<tr>
							<th> Amount </th>
							<th> Summary </th>
						</tr>
					</thead>

					<tbody>
						{transactions}
					</tbody>
				</Table>
			</div>
		);
	}
}

class TransactionForm extends React.Component {
	render() {
		return (
			<Row>
				<h1> Enter a transaction below! </h1>
			  <Col md>
			    <FloatingLabel controlId="floatingInputGrid" label="Amount">
			      <Form.Control size="sm" type="text" placeholder="$10.50" />
			    </FloatingLabel>
			  </Col>
			  <Col md>
			    <FloatingLabel controlId="floatingInputGrid" label="Summary">
			      <Form.Control type="text" placeholder="Groceries - Walmart" />
			    </FloatingLabel>
			  </Col>
			</Row>
		)
	}
}

// ========================================

ReactDOM.render(
	<Budget />,
	document.getElementById('root')
);
