function cov_vq0c36vv9() {
  var path = "/Users/omaralazzawi/Desktop/Resell fullstack mern/client/full-stack-fe/src/featurs/updataSlice.tsx";
  var hash = "92d61c24bbb2f08716f5f079ce446f69b7ab6f5a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/omaralazzawi/Desktop/Resell fullstack mern/client/full-stack-fe/src/featurs/updataSlice.tsx",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 20,
          column: 2
        }
      },
      "2": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 17,
          column: 48
        }
      },
      "3": {
        start: {
          line: 22,
          column: 26
        },
        end: {
          line: 22,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 17
          }
        },
        loc: {
          start: {
            line: 16,
            column: 35
          },
          end: {
            line: 18,
            column: 11
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "92d61c24bbb2f08716f5f079ce446f69b7ab6f5a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_vq0c36vv9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_vq0c36vv9();
import { createSlice } from '@reduxjs/toolkit';
const initialState = (cov_vq0c36vv9().s[0]++, {
  updataProduct: {
    id: '',
    name: '',
    price: '',
    description: ''
  }
});
const updataSlice = (cov_vq0c36vv9().s[1]++, createSlice({
  name: 'updata',
  initialState,
  reducers: {
    updata: (state, action) => {
      cov_vq0c36vv9().f[0]++;
      cov_vq0c36vv9().s[2]++;
      state.updataProduct = action.payload;
    }
  }
}));
export const {
  updata
} = (cov_vq0c36vv9().s[3]++, updataSlice.actions);
export default updataSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0YVNsaWNlLnRzeCJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInVwZGF0YVByb2R1Y3QiLCJpZCIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwidXBkYXRhU2xpY2UiLCJyZWR1Y2VycyIsInVwZGF0YSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLFdBQVQsUUFBNEIsa0JBQTVCO0FBRUEsTUFBTUMsWUFBWSw0QkFBRztBQUNqQkMsRUFBQUEsYUFBYSxFQUFFO0FBQ1hDLElBQUFBLEVBQUUsRUFBRSxFQURPO0FBRVhDLElBQUFBLElBQUksRUFBRSxFQUZLO0FBR1hDLElBQUFBLEtBQUssRUFBRSxFQUhJO0FBSVhDLElBQUFBLFdBQVcsRUFBRTtBQUpGO0FBREUsQ0FBSCxDQUFsQjtBQVNBLE1BQU1DLFdBQVcsNEJBQUdQLFdBQVcsQ0FBQztBQUM1QkksRUFBQUEsSUFBSSxFQUFFLFFBRHNCO0FBRTVCSCxFQUFBQSxZQUY0QjtBQUc1Qk8sRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLE1BQU0sRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFBQTtBQUFBO0FBQ3ZCRCxNQUFBQSxLQUFLLENBQUNSLGFBQU4sR0FBc0JTLE1BQU0sQ0FBQ0MsT0FBN0I7QUFDRDtBQUhHO0FBSGtCLENBQUQsQ0FBZCxDQUFqQjtBQVVBLE9BQU8sTUFBTTtBQUFFSCxFQUFBQTtBQUFGLDZCQUFhRixXQUFXLENBQUNNLE9BQXpCLENBQU47QUFDUCxlQUFlTixXQUFXLENBQUNPLE9BQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXBkYXRhUHJvZHVjdDoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBwcmljZTogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICB9XG59XG5cbmNvbnN0IHVwZGF0YVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICd1cGRhdGEnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICB1cGRhdGE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS51cGRhdGFQcm9kdWN0ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgdXBkYXRhIH0gPSB1cGRhdGFTbGljZS5hY3Rpb25zXG5leHBvcnQgZGVmYXVsdCB1cGRhdGFTbGljZS5yZWR1Y2VyIl19