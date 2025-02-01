import { Form } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IOperatorForm } from '../../interface';
import DynamicParameters from '../generate-form/dynamic-parameters';

import MonacoEditor from '@monaco-editor/react';

const PersoTemplateForm = ({ onValuesChange, form, node }: IOperatorForm) => {
  const { t } = useTranslation();

  const [previewContent, setPreviewContent] = useState('');

  const handlePreview = () => {
    const content = form.getFieldValue(['content']);
    setPreviewContent(content || '');
  };

  return (
    <div>
      <Form
        name="basic"
        autoComplete="off"
        form={form}
        onValuesChange={onValuesChange}
        layout={'vertical'}
      >
        <Form.Item name={['content']} label={t('flow.content')}>
          {/*<Input.TextArea rows={8} placeholder={t('flow.blank')} />*/}

          <MonacoEditor
            height="200px"
            defaultLanguage="javascript"
            defaultValue=""
            options={{
              theme: 'vs-dark',
            }}
            placeholder={t('flow.blank')}
          />
        </Form.Item>

        {/*<button type="button" onClick={handlePreview}>*/}
        {/*  {t('flow.preview')}*/}
        {/*</button>*/}
        {/*<div style={{ marginTop: '16px', border: '1px solid #ddd' }}>*/}
        {/*  <iframe*/}
        {/*      srcDoc={previewContent}*/}
        {/*      title="Preview"*/}
        {/*      sandbox="allow-scripts"*/}
        {/*      style={{ width: '100%', height: '100px', border: 'none' }}*/}
        {/*  ></iframe>*/}
        {/*</div>*/}

        <DynamicParameters nodeId={node?.id}></DynamicParameters>
      </Form>
    </div>
  );
};

export default PersoTemplateForm;
