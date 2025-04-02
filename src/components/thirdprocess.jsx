import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ProgressBar,
} from "react-bootstrap";
import {
  FaCheckCircle,
  FaClipboardList,
  FaCog,
  FaBox,
  FaShippingFast,
  FaHandHoldingHeart,
} from "react-icons/fa";

const ThirdPartyManufacturing = () => {
  return (
    <Container className="">
      <h3 className="text-center mb-5">
        The Process of Third Party Manufacturing
      </h3>
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="d-flex flex-column align-items-center">
            {/* Step 1 */}
            <Card className="shadow-lg mb-4 w-100 step-card">
              <Card.Body>
                <div>
                  <h5 className="d-flex align-items-center">
                    <FaCheckCircle className="text-success mr-3" size={30} />
                    1. Selecting the Right Partner
                  </h5>
                  <p className="ml-5">
                    The process begins with identifying and choosing a
                    manufacturer that can produce the required pharmaceutical
                    products and meet quality standards.
                  </p>
                </div>
              </Card.Body>
            </Card>

            {/* Step 2 */}
            <Card className="shadow-lg mb-4 w-100 step-card">
              <Card.Body>
                <div>
                  <h5 className="d-flex align-items-center">
                    <FaClipboardList className="text-info mr-3" size={30} />
                    2. Agreement and Documentation
                  </h5>
                  <p className="ml-5">
                    This involves the formalities of contracts and agreements
                    specifying product specifications, delivery timelines,
                    quality standards, and costings.
                  </p>
                </div>
              </Card.Body>
            </Card>

            {/* Step 3 */}
            <Card className="shadow-lg mb-4 w-100 step-card">
              <Card.Body>
                <div>
                  <h5 className="d-flex align-items-center">
                    <FaCog className="text-warning mr-3" size={30} />
                    3. Supply of Raw Materials
                  </h5>
                  <p className="ml-5">
                    Depending on the agreement, the hiring company may supply
                    raw materials or the manufacturer may procure them.
                  </p>
                </div>
              </Card.Body>
            </Card>

            {/* Step 4 */}
            <Card className="shadow-lg mb-4 w-100 step-card">
              <Card.Body>
                <div>
                  <h5 className="d-flex align-items-center">
                    <FaBox className="text-danger mr-3" size={30} />
                    4. Production
                  </h5>
                  <p className="ml-5">
                    The third party manufacturer begins production according
                    to agreed-upon protocols and timelines.
                  </p>
                </div>
              </Card.Body>
            </Card>

            {/* Step 5 */}
            <Card className="shadow-lg mb-4 w-100 step-card">
              <Card.Body>
                <div>
                  <h5 className="d-flex align-items-center">
                    <FaHandHoldingHeart className="text-success mr-3" size={30} />
                    5. Quality Assurance
                  </h5>
                  <p className="ml-5">
                    The manufactured drugs undergo rigorous quality checks as
                    per regulatory requirements to ensure they meet the
                    necessary standards.
                  </p>
                </div>
              </Card.Body>
            </Card>

            {/* Step 6 */}
            <Card className="shadow-lg mb-4 w-100 step-card">
              <Card.Body>
                <div>
                  <h5 className="d-flex align-items-center">
                    <FaShippingFast className="text-primary mr-3" size={30} />
                    6. Delivery
                  </h5>
                  <p className="ml-5">
                    Upon successful quality verification, products are
                    packaged and delivered to the hiring company or directly
                    to the market as per the arrangement.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdPartyManufacturing;
