//String Literal Types

let direction: "north" | "south" | "east" | "west";

direction = "north";

//Numeric Literal Types

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

//Combining with other types

type SuccessResponse = {
  status: "success";
  data: unknown;
};

type ErrorResponse = {
  status: "error";
  message: string;
};
type ApiResponse = SuccessResponse|ErrorResponse;


