// TODO - Complete syntax sheet and create reg for each of them
// TODO - DO code,pre last

export default [
  {
    reg: /^#{1}\s{1}(.*)$/gim,
    out: "<h1>$1</h1>"
  },
  {
    reg: /^#{2}\s{1}(.*)$/gim,
    out: "<h2>$1</h2>"
  },
  {
    reg: /^#{3}\s{1}(.*)$/gim,
    out: "<h3>$1</h3>"
  },
  {
    reg: /^#{4}\s{1}(.*)$/gim,
    out: "<h4>$1</h4>"
  },
  {
    reg: /^#{5}\s{1}(.*)$/gim,
    out: "<h5>$1</h5>"
  },
  {
    reg: /^#{6}\s{1}(.*)$/gim,
    out: "<h6>$1</h6>"
  },
  {
    reg: /^(-{3,}|={3,})$/gim,
    out: "<hr/>"
  }
];

export const RegRules = {
  "#": [
    {
      reg: /^#{1}\s{1}(.*)$/gim,
      out: "<h1>$1</h1>"
    },
    {
      reg: /^#{2}\s{1}(.*)$/gim,
      out: "<h2>$1</h2>"
    },
    {
      reg: /^#{3}\s{1}(.*)$/gim,
      out: "<h3>$1</h3>"
    },
    {
      reg: /^#{4}\s{1}(.*)$/gim,
      out: "<h4>$1</h4>"
    },
    {
      reg: /^#{5}\s{1}(.*)$/gim,
      out: "<h5>$1</h5>"
    },
    {
      reg: /^#{6}\s{1}(.*)$/gim,
      out: "<h6>$1</h6>"
    }
  ],
  "-": [
    {
      reg: /^(-{3,}|={3,})$/gim,
      out: "<hr/>"
    }
  ]
};
