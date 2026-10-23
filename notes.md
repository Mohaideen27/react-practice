# React Tools:

## @tanstack/react-query:

it is a server side state management tool. it is used to cache the data and will not refresh data unless any changes made in the server data.
for setup we need query client constructor and queryclientprovider. This QueryClientProvider should wrap all the component . from QueryClient constructor we QueryClientProvider.

here two important hooks

1. userQuery it is a hook it will work only under tanstack environment it wil accept one argument that is object. in that object two important properties.
   QueryKey --- it will act like an identifier.
   Queryfn ---- we need to pass the function which will return the fetched data in the form of promise. useQuery return one object we will get data, isLoading and isError all these property values.
   useQuery used for only getRequest.

2. useMutate ---- it is a hook it will work only under tanstack environment. it will accept one argument that is object. here three properties are important.
   mutateFn--- here we pass the function which will mutate the server data, and return data in the form of promise
   onSuccess --- here will write the logic when mutation is success.
   onError --- here will write the logic when mutation is failed

useMutate used for post, put, patch, delete request.

3. useQueryClient --- it is hook which is used to refetch the data whenever we done mutation in the server data.

it will return one object.
let myclient=useQueryClient()
myClient.invalidateQueries({queryKey:[ ]})

Axios:
it is used to simplify the http request from client to server. It is an alternative for fetch. here also we can perform all the http request like get, post, put, patch, delete.

the advantage of having axios is it has interceptors. which helps to add code before sending two type of interceptors

1. requestInterceptor -- here we can add header and authorized tokens before sending request to server
2. responseInterceptors --- here we can handle error or data after getting response

react --- hooks, jsx, virtualdom, contextApi, lazyloading, memoization

4. recharts: it is used to create charts like bar, line, pie by using components
   important components are
1. BarChart- container for bar chart
1. Bar ---- individual bar
1. Tooltip ---- while hover provide information about chart
1. Legend ---- to indicate category for all colors
1. LineChart ---- container for LineChart
1. Line----- to provide individual line
1. PieChart---- container for pie chart
1. pie---- to draw circle

important attributes
dataKey --- for basedata
nameKey--- for provide name for the data
width---- to provide width of the container
height ---- to provide height for the container
data--- it should be array of object
fill--- to fill the color
stroke--- to provide border color
cx --- horizontal center point of the pie
cy--- vertical center point of the pie

outer-radius --- to provide the size of the pie
inner-radius --- to provide the hole in the pie
