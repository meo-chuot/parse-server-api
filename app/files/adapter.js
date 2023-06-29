import GCSAdapter from '@culy/parse-server-gcs-adapter';
import { getPrivateKey } from '../helper.js';

const _fileAdapter = new GCSAdapter(
  process.env.GCP_PROJECT_ID || 'GCP_PROJECT_ID',
  getPrivateKey(process.env.GCP_CREDENTIALS || 'GCP_CREDENTIALS'),
  process.env.GCS_BUCKET || 'GCS_BUCKET',
  { directAccess: true }
);

export const filesAdapter = _fileAdapter
