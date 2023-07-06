import UserTemplate from "../templates/UserTemplate";
import { Container, Row, Col, Table, Card } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
export default function Feedback() {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8000/feedback").then(res => res.json())
            .then(result => {
                setFeedback(result);
            });
    },
        []);
    return (
        <UserTemplate>
            <Row>
                <h2>Feedback</h2>
                <Table>
                    <thead>
                        <th>Name</th>
                        <th>Content</th>
                    </thead>
                    <tbody>
                        {feedback.map((c) => (
                            <tr>

                                <td>{c.name}</td>
                                <td> {c.content}</td>


                            </tr>
                        ))}
                    </tbody>

                </Table>
            </Row>
        </UserTemplate>
    );
}