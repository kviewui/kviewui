export const useProvide = (config = {}) => {
    uni['$kView'] = config;
}