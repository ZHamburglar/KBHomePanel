import React, {Component} from "react";
import { connect } from 'react-redux';
import { bbcFetch } from '../../../actions';
import { bbc_found, bbc_loading, bbc_loading_fail } from '../../../actions/types';

import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock,
  Label,
  ListGroup,
  ListGroupItem,
  Media,
  Input,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";


class News extends Component {
  componentDidMount(){
    console.log('Hello ', this.props.bbc_loading)
    this.props.bbcFetch();
    console.log('BBC News: ', this.props.bbc_news)
  }

  componentDidUpdate(){
    console.log('BBC News: ', this.props.bbc_news)
  }

  renderBBCList(){
    console.log("Rendering the BBC Story list")
    const ListOfStories = this.props.bbc_news.data.articles
    const ListStories = ListOfStories.map((pats, index) => (
      <ListGroupItem key={pats.index} className="justify-content-between" href="www.google.com">
        <Media>
          <Media left href="#">
            <Media object data-src={pats.urlToImage} alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              {pats.title}
            </Media>
            {pats.description}
          </Media>
        </Media>
      </ListGroupItem>
    ))

    return (
      <ListGroup>
        {ListStories}
      </ListGroup>
    )
  }

  renderBBCStories(){
    console.log('Rendering BBC Stories')
    if (this.props.bbc_news){
      return (
        this.renderBBCList()
      )
    } else {
      return (
        <ListGroup>
          <ListGroupItem className="justify-content-between">
            Dapibus ac facilisis in
          </ListGroupItem>
        </ListGroup>
      )
    }
  }

  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> BBC News
              </CardHeader>
              <CardBlock className="card-body">
                  {this.renderBBCStories()}
              </CardBlock>
            </Card>
          </Col>
        </Row>
        <Row>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Condensed Table
              </CardHeader>
              <CardBlock className="card-body">
                <Table responsive size="sm">
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Carwyn Fachtna</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Nehemiah Tatius</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Ebbe Gemariah</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Eustorgios Amulius</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Leopold Gáspár</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Bordered Table
              </CardHeader>
              <CardBlock className="card-body">
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Pompeius René</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Paĉjo Jadon</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Micheal Mercurius</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Ganesha Dubhghall</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Hiroto Šimun</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <lPaginationItemi className="page-item"><PaginationLink href="#">2</PaginationLink></lPaginationItemi>
                  <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ news }) => {
  const { bbc_news, bbc_loading } = news;
  return { bbc_news, bbc_loading };
}

export default connect(mapStateToProps, {
  bbc_found, bbc_loading, bbc_loading_fail, bbcFetch
})(News);
