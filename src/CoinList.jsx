import React from "react";
import Table from 'react-bootstrap/Table';
import CoinInfoModal from "./CoinInfoModal";

function CoinList() {
  const [ showInfoModal, setShowInfoModal] = React.useState(false);
  
    return (
      <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>VWAP</th>
          <th>Supply</th>
          <th>Volume</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={() => setShowInfoModal(true)}>
          <td>1</td>
          <td>BitCoin</td>
          <td>680000</td>
          <td>@XXX</td>
          <td>@XXX</td>
          <td>@XXX</td>
          <td>@XXX</td>
          <td>@XXX</td>
        </tr>
      
      </tbody>
    </Table>
    <CoinInfoModal show = {showInfoModal} setShow={setShowInfoModal}/>
    </>
  );
}

export default CoinList;