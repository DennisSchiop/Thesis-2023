// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SneakerOwnership {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function transferOwnership(address newOwner) public {
        require(msg.sender == owner, "Only the owner can transfer ownership");
        owner = newOwner;
    }
}

struct QRCodeData {
  string qrCode;
  uint256 size;
  string model;
  string color;

}

mapping(uint256 => QRCodeData) public qrCodes;

event QRCodeStored(uint256 sneakerId, string qrCode);

function storeQRCode(
  uint256 sneakerId,
  string memory qrCodeData,
  uint256 sizeData,
  string memory modelData,
  string memory colorData
) public {
  QRCodeData memory newQRCodeData = QRCodeData(qrCodeData, sizeData, modelData, colorData);
  qrCodes[sneakerId] = newQRCodeData;
  emit QRCodeStored(sneakerId, qrCodeData);
}

function getQRCode(uint256 sneakerId)
  public
  view
  returns (
    string memory,
    uint256,
    string memory,
    string memory
  )
{
  QRCodeData memory qrCodeData = qrCodes[sneakerId];
  return (qrCodeData.qrCode, qrCodeData.size, qrCodeData.model, qrCodeData.color);
}

