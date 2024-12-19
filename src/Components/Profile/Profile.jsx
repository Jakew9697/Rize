import { useState, useEffect } from "react";
import { Container, Row, Col, Image, ListGroup, Spinner } from "react-bootstrap";
import "./Profile.css";

export default function Profile() {
  const [posts, setPosts] = useState([]); // state to store posts. mock data for now.

  useEffect(() => {
    const fetchPosts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); //simulating load delay for now
      setPosts([
        {
          id: 1,
          content: "rippin bull markets yadig",
          date: "December 20, 2023",
        },
        {
          id: 2,
          content: "luke likes little girls",
          date: "December 18, 2023",
        },
        {
          id: 3,
          content: "marcus thumbs his butthole... a lot",
          date: "December 15, 2023",
        },
      ]);
    };

    fetchPosts();
  }, []);

  return (
    <Container fluid className="profile-container mb-5 mt-2 rounded">
      {/* Profile Header */}
      <Row>
        <Col>
          <div className="profile-header">
            <Image src="https://via.placeholder.com/1200x300" fluid className="banner-image mt-3 rounded" />
            <Image
              src="https://via.placeholder.com/150"
              roundedCircle
              className="profile-picture"
            />
          </div>
        </Col>
      </Row>

      {/* User Information */}
      <Row>
        <Col xs={12}>
          <div className="profile-info">
            <h2 className="profile-name mb-1">Jake Worsham</h2>
            <p className="profile-handle mb-2">@jworsham</p>
            <p className="profile-bio">
              I like my biscuits risky... 
            </p>
          </div>
        </Col>
      </Row>

      {/* Profile Statistics */}
      <Row>
        <Col xs={12}>
          <div className="profile-stats d-flex justify-content-center">
            <div className="stat-item">
              <span className="stat-number">{posts.length}</span>
              <span className="stat-label">Posts</span>
            </div>
          </div>
        </Col>
      </Row>
      <hr />

      {/* Post Feed */}
      <Row>
        <Col>
          {posts.length === 0 ? (
            <div className="text-center mt-4">
              <Spinner animation="border" variant="success" />
              <p className="mt-2">Loading Posts...</p>
            </div>
          ) : (
            <ListGroup variant="flush">
              {posts.map((post) => (
                <ListGroup.Item key={post.id} className="post-item bg-dark text-white mb-3 p-3 rounded">
                  <p className="post-content">{post.content}</p>
                  <small className="post-date">{post.date}</small>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
}
