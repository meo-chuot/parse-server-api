export const isBase64 = (v: any, opts?: any) => {
  if (v instanceof Boolean || typeof v === 'boolean') {
    return false;
  }

  if (!(opts instanceof Object)) {
    opts = {};
  }

  if (opts.allowEmpty === false && v === '') {
    return false;
  }

  let regex = '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?';
  const mimeRegex = '(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)';

  if (opts.mimeRequired === true) {
    regex = mimeRegex + regex;
  } else if (opts.allowMime === true) {
    regex = mimeRegex + '?' + regex;
  }

  if (opts.paddingRequired === false) {
    regex = '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?';
  }

  return new RegExp('^' + regex + '$', 'gi').test(v);
};

export const isString = (v: any) => typeof v === 'string' || v instanceof String;

export const base64Decode = (v: any) => {
  try {
    const buff = Buffer.from(v, 'base64');
    return buff.toString('ascii');
  } catch (e) {
    console.log('base64Decode error', e);
    return v;
  }
};

export const getPrivateKey = (v: any) => {
  v = decodeURIComponent(v);
  if (isString(v) && isBase64(v)) {
    v = base64Decode(v);
  }
  return JSON.parse(v);
};

