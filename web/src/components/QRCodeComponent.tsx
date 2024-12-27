import QRCode from 'qrcode.react';
import React from 'react';

const QRCodeComponent: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <QRCode
        value={value} // Lien ou texte encodé dans le QR code
        size={200} // Taille du QR code
        fgColor="#000000" // Couleur du QR code
        bgColor="#ffffff" // Couleur de fond
        level="H" // Niveau de correction d'erreurs
      />
      <p>Scannez le QR code pour accéder au contenu.</p>
    </div>
  );
};

export default QRCodeComponent;
