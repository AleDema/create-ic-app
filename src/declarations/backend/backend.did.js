export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getNumber' : IDL.Func([], [IDL.Nat], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
