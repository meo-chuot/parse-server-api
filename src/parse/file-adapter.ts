import GCSAdapter from '@culy/parse-server-gcs-adapter';
import config from '@/config';

const _adapter = new GCSAdapter(
  config.gcp.projectId,
  config.gcp.credentials,
  config.gcp.bucket,
  { directAccess: true }
);

export const FileAdapter = _adapter
