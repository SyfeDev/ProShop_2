import {Row, Col, Container} from 'react-bootstrap'
import products from '../products'
import Products from '../components/Products'
const HommeScreen = () => {
  return (
    <>
    <Row>
        {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <Products key={product._id} product={product} />
              </Col>
        ))}
    </Row>
    </>
  )
}

export default HommeScreen