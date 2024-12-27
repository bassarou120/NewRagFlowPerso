import CopyToClipboard from '@/components/copy-to-clipboard';
import HightLightMarkdown from '@/components/highlight-markdown';
import { SharedFrom } from '@/constants/chat';
import { useTranslate } from '@/hooks/common-hooks';
import { IModalProps } from '@/interfaces/common';
import { Card, Modal, Tabs, TabsProps, Typography } from 'antd';

import styles from './index.less';

import { shortenUrl } from '@/services/shortener';

import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

const { Paragraph, Link } = Typography;

const EmbedModal = ({
  visible,
  hideModal,
  token = '',
  form,
  beta = '',
  isAgent,
}: IModalProps<any> & {
  token: string;
  form: SharedFrom;
  beta: string;
  isAgent: boolean;
}) => {
  const { t } = useTranslate('chat');

  const text = `
  ~~~ html
  <iframe
  src="${location.origin}/chat/share?shared_id=${token}&from=${form}&auth=${beta}"
  style="width: 100%; height: 100%; min-height: 600px"
  frameborder="0"
>
</iframe>
~~~
  `;

  const qrData = `${location.origin}/chat/share?shared_id=${token}&from=${form}&auth=${beta}`; // URL pour le QR code
  // const resultShotqrData =  shortenUrl(qrData);

  const [shortenedQrData, setShortenedQrData] = useState('---');

  useEffect(() => {
    const fetchShortenedUrl = async () => {
      try {
        const result = await shortenUrl(
          `${location.origin}/chat/share?shared_id=${token}&from=${form}&auth=${beta}`,
        );
        setShortenedQrData(result);
      } catch (error) {
        console.error('Error shortening the URL:', error);
      }
    };
    fetchShortenedUrl();
  }, [qrData]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('fullScreenTitle'),
      children: (
        <Card
          title={t('fullScreenDescription')}
          extra={<CopyToClipboard text={text}></CopyToClipboard>}
          className={styles.codeCard}
        >
          <HightLightMarkdown>{text}</HightLightMarkdown>
        </Card>
      ),
    },
    {
      key: '2',
      label: t('qrCodeTitle'), // Nouveau titre pour le QR code
      children: (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {/*<QRCode value={qrData} size={200} />*/}

          {/*<br/>*/}

          {/*<QRCode value={resultShotqrData} size={200} />*/}

          <h6>
            {shortenedQrData && <QRCode value={shortenedQrData} size={200} />}
          </h6>
          <br />

          <h6>{shortenedQrData} </h6>

          {/*<Paragraph className={styles.qrInfo}>*/}
          <Paragraph className={styles.qrInfo}>
            {t('scanQrCode')} {/* Message pour guider l'utilisateur */}
          </Paragraph>
        </div>
      ),
    },
    {
      key: '3',
      label: t('partialTitle'),
      children: t('comingSoon'),
    },
    {
      key: '4                ',
      label: t('extensionTitle'),
      children: t('comingSoon'),
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <Modal
      title={t('embedModalTitle')}
      open={visible}
      style={{ top: 300 }}
      width={'50vw'}
      onOk={hideModal}
      onCancel={hideModal}
    >
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

      <div className="text-base font-medium mt-4 mb-1">
        {t(isAgent ? 'flow' : 'chat', { keyPrefix: 'header' })}
        <span className="ml-1 inline-block">ID</span>
      </div>

      <Paragraph copyable={{ text: token }} className={styles.id}>
        {token}
      </Paragraph>
      <Link
        href={
          isAgent
            ? 'https://ragflow.io/docs/dev/http_api_reference#create-session-with-an-agent'
            : 'https://ragflow.io/docs/dev/http_api_reference#create-session-with-chat-assistant'
        }
        target="_blank"
      >
        {t('howUseId')}
      </Link>
    </Modal>
  );
};

export default EmbedModal;
