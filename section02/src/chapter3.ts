// object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "Nova",
};

let config: {
  readonly apyKey: string;
} = {
  apyKey: "MY API KEY",
};

// config.apyKey = "hacked"; // readonly로 인해 수정 불가
