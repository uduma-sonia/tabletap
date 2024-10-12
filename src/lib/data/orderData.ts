const groupMemberObject = {
  name: "member name",
  items: [
    {
      item: "pasta",
      quantity: 1,
      unit_price: 80,
    },
  ],
};

export const orderObject = [
  {
    order_no: "11022",
    status: "pending",
    codeId: "ejcdmjsoindjS",
    code_name: "pearl",
    amount: 140,
    payment_option: "group pay",
    group_members: [groupMemberObject],
    order_type: "group",
    tip_amount: 10,
  },
  {
    order_no: "11023",
    status: "accepted",
    codeId: "ejcdmjoinssdjS",
    code_name: "White",
    amount: 23.0,
    payment_option: "Individual pay",
    group_members: [groupMemberObject],
    order_type: "Individual",
    tip_amount: 10,
  },
  {
    order_no: "91027",
    status: "served",
    codeId: "ejcdmjoindjS",
    code_name: "Honey",
    amount: 95.3,
    payment_option: "Individual pay",
    group_members: [groupMemberObject],
    order_type: "Individual",
    tip_amount: 10,
  },
  {
    order_no: "31122",
    status: "canceled",
    codeId: "ejcdmjoindjS",
    code_name: "Emerald",
    amount: 40.1,
    payment_option: "group pay",
    group_members: [groupMemberObject],
    order_type: "group",
    tip_amount: 10,
  },
];
